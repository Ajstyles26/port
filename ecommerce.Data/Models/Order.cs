using System;
using System.Collections.Generic;

namespace ecommerce.Data.Models
{
    public class Order
    {
        public int Id { get; set; }
        public string CustomerEmail { get; set; } = string.Empty;
        public DateTime OrderDate { get; set; } = DateTime.UtcNow;
        public List<OrderItem> Items { get; set; } = new();
    }
}