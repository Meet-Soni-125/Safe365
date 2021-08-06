using System;
using Microsoft.EntityFrameworkCore.Migrations;

namespace safe365BackEnd.Migrations
{
    public partial class safe365BackEndModelsCustomerContextSeed : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.InsertData(
                table: "Customerts",
                columns: new[] { "CustomerId", "BusinessName", "CreatedDate", "DateOfBirth", "FirstName", "LastName" },
                values: new object[] { 1, "Shopping", new DateTime(2021, 8, 6, 12, 14, 33, 836, DateTimeKind.Local).AddTicks(5608), new DateTime(1990, 4, 25, 0, 0, 0, 0, DateTimeKind.Unspecified), "Meet", "Soni" });
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DeleteData(
                table: "Customerts",
                keyColumn: "CustomerId",
                keyValue: 1);
        }
    }
}
