using EcommerceBackend.Models;
using System.Collections.Generic;
using System.Linq;

namespace EcommerceBackend.Repositories
{
    public class UserRepository : IUserRepository
    {
        private readonly List<User> _users = new();
        private int _nextId = 1;

        public User? GetByEmail(string email)
        {
            return _users.FirstOrDefault(u => u.Email == email);
        }

        public void Add(User user)
        {
            user.Id = _nextId++;
            _users.Add(user);
        }
    }
}
