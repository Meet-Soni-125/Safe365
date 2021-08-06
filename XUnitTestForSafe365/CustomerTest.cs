using System;
using System.Collections.Generic;
using System.Text;
using safe365BackEnd.Models;
using safe365BackEnd.Controllers;
using safe365BackEnd.Extensions;
using Moq;
using Xunit;
using safe365BackEnd.Models.Repository;
using System.Linq;

namespace XUnitTestForSafe365
{
    public class CustomerTest
    {
        public Mock<IDataRepository<Customer>> mock = new Mock<IDataRepository<Customer>>();

        [Fact]
        //test case for get customer by ID
        public void GetCustomerByID()  
        {
            mock.Setup(p => p.Get(2)).Returns(
                   new Customer
                   {
                       FirstName = "Test User",
                       LastName = "last name",
                       BusinessName = "shopping a",
                       DateOfBirth = new DateTime(1985, 03, 23),                
                       CreatedDate = new DateTime(2021, 08, 10)
                   }
                );

        }

        [Fact]
        //test case for get all customers
        public void GetAllCustomers()
        {
            List<Customer> customers = new List<Customer>();
            customers.Add(new Customer
            {
                FirstName = "Test User",
                LastName = "last name",
                BusinessName = "shopping a",
                DateOfBirth = new DateTime(1985, 03, 23),
                CreatedDate = new DateTime(2021, 08, 10)
            });

            IEnumerable<Customer> customers1 = from c in customers select c;
            mock.Setup(p => p.GetAll()).Returns(customers1);

        }

        [Fact]
        //test case for add customer details
        public void AddCustomer()
        {
            Customer customer = new Customer();
            customer.FirstName = "Test User";
            customer.LastName = "last name";
            customer.BusinessName = "shopping a";
            customer.DateOfBirth = new DateTime(1985, 03, 23);
            customer.CreatedDate = new DateTime(2021, 08, 10);
            mock.Setup(p => p.Add(customer));

        }


        //test case for update customer details by ID
        [Fact]
        public void UpdateCustomer()
        {
            Customer cId = new Customer();
            cId.CustomerId = 2;
            Customer customer = new Customer();
            customer.FirstName = "Test User";
            customer.LastName = "last name";
            customer.BusinessName = "shopping a";
            customer.DateOfBirth = new DateTime(1985, 03, 23);
            customer.CreatedDate = new DateTime(2021, 08, 10);

            mock.Setup(p => p.Update(cId,customer));

        }

        //test case for delete customer details by ID
        [Fact]
        public void DeleteCustomer()
        {
            Customer cId = new Customer();
            cId.CustomerId = 2;
            mock.Setup(p => p.Delete(cId));
        }

    }
}
