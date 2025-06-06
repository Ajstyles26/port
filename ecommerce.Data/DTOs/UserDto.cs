using ecommerce.Data.Enum;
using ecommerce.Data.Models;
using System;
namespace ecommerce.Data.DTOs
{
    public class UserDto
    {
        public string Email { get; set; } = string.Empty;
        public string Password { get; set; } = string.Empty;
    }
}
