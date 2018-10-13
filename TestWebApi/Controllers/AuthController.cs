using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using TestWebApi.Data;
using TestWebApi.DTOs;
using TestWebApi.Models;

namespace TestWebApi.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class AuthController : ControllerBase
    {
        private readonly IAuthRepository _authRepository;

        public AuthController(IAuthRepository authRepository)
        {
            _authRepository = authRepository;
        }

        [HttpPost]
        public async Task<IActionResult> Register(UserForRegisterDto userDto)
        {
            // validate request
            var username = userDto.Username.ToLower();

            if (await _authRepository.UserExists(username)) return BadRequest("Username already exists");

            var userToCreate = new User
            {
                Username = username
            };

            var createdUser = await _authRepository.Register(userToCreate, userDto.Password);

            return StatusCode(201);
        }
        
        [HttpPost("login")]
        public async Task<IActionResult> Login(UserForRegisterDto userDto)
        {
            var loginResult = await _authRepository.Login(userDto.Username, userDto.Password);
            if (loginResult == null) return BadRequest("No username exists");
            return Ok(loginResult);
        }
    }
}
