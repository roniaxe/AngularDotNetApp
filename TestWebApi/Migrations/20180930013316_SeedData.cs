using Microsoft.EntityFrameworkCore.Migrations;

namespace TestWebApi.Migrations
{
    public partial class SeedData : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.InsertData(
                table: "Blogs",
                columns: new[] { "Id", "Name" },
                values: new object[] { 1, "Books Blog" });

            migrationBuilder.InsertData(
                table: "Blogs",
                columns: new[] { "Id", "Name" },
                values: new object[] { 2, "Code Blog" });

            migrationBuilder.InsertData(
                table: "Blogs",
                columns: new[] { "Id", "Name" },
                values: new object[] { 3, "Angular Blog" });
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DeleteData(
                table: "Blogs",
                keyColumn: "Id",
                keyValue: 1);

            migrationBuilder.DeleteData(
                table: "Blogs",
                keyColumn: "Id",
                keyValue: 2);

            migrationBuilder.DeleteData(
                table: "Blogs",
                keyColumn: "Id",
                keyValue: 3);
        }
    }
}
