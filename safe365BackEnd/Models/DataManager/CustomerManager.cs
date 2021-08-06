using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using safe365BackEnd.Models.Repository;

namespace safe365BackEnd.Models.DataManager
{
    public class CustomerManager : IDataRepository<Customer>
    {
        readonly CustomerContext _customerContext;

        public CustomerManager(CustomerContext context)
        {
            _customerContext = context;
        }

        public IEnumerable<Customer> GetAll()
        {
            return _customerContext.Customerts.ToList();
        }

        public Customer Get(int id)
        {
            return _customerContext.Customerts
                  .FirstOrDefault(e => e.CustomerId == id);
        }

        public void Add(Customer entity)
        {
            _customerContext.Customerts.Add(entity);
            _customerContext.SaveChanges();
        }

        public void Update(Customer customer, Customer entity)
        {
            customer.FirstName = entity.FirstName;
            customer.LastName = entity.LastName;
            customer.BusinessName = entity.BusinessName;
            customer.DateOfBirth = entity.DateOfBirth;
            customer.CreatedDate = DateTime.Now;
            _customerContext.SaveChanges();
        }

        public void Delete(Customer customer)
        {
            _customerContext.Customerts.Remove(customer);
            _customerContext.SaveChanges();
        }

    }
}
