using ecommerce.Data.Enum;
using System;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace ecommerce.Data.DTOs
{
    public class SellerDto : UserDto
    {
        [Required]
        public string Name { get; set; } = string.Empty;

        [Required]
        public string PhoneNumber { get; set; } = string.Empty;

        [Required]
        public string Address { get; set; } = string.Empty;

        [Required]
        public string CompanyName { get; set; } = string.Empty;

        [Required]
        public string CompanyAddress { get; set; } = string.Empty;

        [Required]
        public UserType UserType { get; set; } = UserType.Sellers;
    }
}