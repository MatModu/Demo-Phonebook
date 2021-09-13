package com.demo.phonebook.controller;

import java.util.NoSuchElementException;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

import com.demo.phonebook.entity.Phonebook;
import com.demo.phonebook.service.PhonebookService;

@Controller // This means that this class is a Controller
@RequestMapping(path="/demo") // This means URL's start with /demo (after Application path)
public class PhonebookController {
  
	@Autowired
	PhonebookService phonebookService;

	@PostMapping(path = "/addUser") 
	@ResponseStatus(HttpStatus.CREATED)
	public @ResponseBody Phonebook addNewUser(@RequestParam String firstName, @RequestParam String lastName, @RequestParam String phone) {
		// @ResponseBody means the returned String is the response, not a view name
		// @RequestParam means it is a parameter from the GET or POST request

		Phonebook phonebook = new Phonebook();
		phonebook.setFirstName(firstName);
		phonebook.setLastName(lastName);
		phonebook.setPhone(phone);
		return phonebookService.addUser(phonebook);
	}
	
	@DeleteMapping(path = "/{id}")
	public @ResponseBody ResponseEntity<String> deleteUser(@PathVariable Long id) {
		
		try {
			phonebookService.deleteUserById(id);
			return new ResponseEntity<String>(HttpStatus.OK);
		} catch (RuntimeException ex) {
			System.out.println(ex.getMessage());
		    return new ResponseEntity<String>(HttpStatus.NOT_FOUND);
		}
	}
	
	@PutMapping(path = "/updateUser")
	public @ResponseBody ResponseEntity<String> updateUser(@RequestBody Phonebook phonebook) {
		try {
			phonebookService.updateUser(phonebook);
			return new ResponseEntity<String>(HttpStatus.OK);
		} catch (NoSuchElementException ex) {
			System.out.println(ex.getMessage());
		    return new ResponseEntity<String>(HttpStatus.NOT_FOUND);
		}
	}

	@GetMapping(path = "/allUsers")
	public @ResponseBody Iterable<Phonebook> getAllUsers() {
		return phonebookService.getAllUsers();
	}
}
