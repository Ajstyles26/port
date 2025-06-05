using EcommerceBackend.Models;

namespace EcommerceBackend.Repositories
{
    public interface IUserRepository
    {
        User? GetByEmail(string email);
        void Add(User user);
    }
}
