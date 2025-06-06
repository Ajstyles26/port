using System.Collections.Generic;
using ecommerce.Data.DTOs;

namespace ecommerce.Data.DTOs.DTOs
{
    public class OrderDto
    {
        public string CustomerEmail { get; set; } = string.Empty;
        public List<OrderItemDto> Items { get; set; } = new();
    }
}