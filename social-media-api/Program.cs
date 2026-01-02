using contracts;
using Microsoft.AspNetCore.Mvc;
using System.Data.Common;
using System.Formats.Tar;
using System.Security.Cryptography.X509Certificates;
using System.Text;
using System.Text.Json;
var builder = WebApplication.CreateBuilder(args);

// Add services to the container.
// Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();
builder.Services.AddCors(options =>
{
    options.AddPolicy("AllowReact", policy =>
    {
        policy.WithOrigins("http://localhost:5173") // Vite dev server port
              .AllowAnyMethod()
              .AllowAnyHeader();
    });
});

var app = builder.Build();

// Configure JSON serialization to preserve property names
var jsonOptions = new JsonSerializerOptions
{
    PropertyNamingPolicy = null,
    WriteIndented = true
};
app.UseCors("AllowReact");
// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}

//app.UseHttpsRedirection();

var summaries = new[]
{
    "Freezing", "Bracing", "Chilly", "Cool", "Mild", "Warm", "Balmy", "Hot", "Sweltering", "Scorching"
};

app.MapGet("/Posts", () =>
{
    Thread.Sleep(5000);
    var ExistingJsonDataText = File.ReadAllText("PostRelatedData.json");
    return JsonSerializer.Deserialize<PostResponse>(ExistingJsonDataText, jsonOptions);
})
.WithName("GetPosts")
.WithOpenApi();

app.MapPost("/Posts/Create", (PostRequest post) =>
{
    Thread.Sleep(5000);
    string filePath = "PostRelatedData.json";
    var ExistingJsonDataText = File.ReadAllText(filePath);
    var ExistingPosts = JsonSerializer.Deserialize<PostResponse>(ExistingJsonDataText, jsonOptions);
    ExistingPosts?.Posts?.Add(post.PostData);
    var NewPostData = JsonSerializer.Serialize<PostResponse>(ExistingPosts, jsonOptions);
    File.WriteAllText("PostRelatedData.json", NewPostData);
})
.WithName("CreatePost")
.WithOpenApi();

app.MapDelete("/Posts/{id}", (string id) =>
{
    Thread.Sleep(5000);
    string filePath = "PostRelatedData.json";
    var ExistingJsonDataText = File.ReadAllText(filePath);
    var ExistingPosts = JsonSerializer.Deserialize<PostResponse>(ExistingJsonDataText, jsonOptions);
    ExistingPosts?.Posts?.RemoveAll(x=> x.PostID == id);
    var NewPostData = JsonSerializer.Serialize<PostResponse>(ExistingPosts, jsonOptions);
    File.WriteAllText("PostRelatedData.json", NewPostData);
})
.WithName("DeletePost")
.WithOpenApi();

app.Run();



