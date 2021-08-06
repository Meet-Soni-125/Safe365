using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using safe365BackEnd.Models;
using safe365BackEnd.Models.Repository;

namespace safe365BackEnd.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class CustomerController : ControllerBase
    {

        private readonly IDataRepository<Customer> _dataRepository;

        public CustomerController(IDataRepository<Customer> dataRepository)
        {
            _dataRepository = dataRepository;
        }

        [HttpGet]
        public IActionResult Get()
        {
            IEnumerable<Customer> customers = _dataRepository.GetAll();
            return Ok(customers);
        }


        [HttpGet("{id}", Name = "Get")]
        public IActionResult Get(int id)
        {
            Customer customer = _dataRepository.Get(id);
            if (customer == null)
            {
                return NotFound("The Customer record couldn't found.");
            }
            return Ok(customer);
        }


        [HttpPost]
        public IActionResult Post([FromBody] Customer customer)
        {
            if (customer == null)
            {
                return BadRequest("Employee is null.");
            }
            _dataRepository.Add(customer);
            return CreatedAtRoute(
                  "Get",
                  new { Id = customer.CustomerId },
                  customer);
        }

        [HttpPut("{id}")]
        public IActionResult Put(int id, [FromBody] Customer customer)
        {
            if (customer == null)
            {
                return BadRequest("Customer is null.");
            }
            Customer customerToUpdate = _dataRepository.Get(id);
            if (customerToUpdate == null)
            {
                return NotFound("The Customer record couldn't found.");
            }
            _dataRepository.Update(customerToUpdate, customer);
            return NoContent();
        }


        [HttpDelete("{id}")]
        public IActionResult Delete(int id)
        {
            Customer customer = _dataRepository.Get(id);
            if (customer == null)
            {
                return NotFound("The Customer record couldn't found.");
            }
            _dataRepository.Delete(customer);
            return NoContent();
        }
    }
}