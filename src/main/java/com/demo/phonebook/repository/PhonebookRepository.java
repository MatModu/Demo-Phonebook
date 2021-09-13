package com.demo.phonebook.repository;

import org.springframework.data.repository.CrudRepository;

import com.demo.phonebook.entity.Phonebook;

// This will be AUTO IMPLEMENTED by Spring into a Bean called phonebookRepository
// CRUD refers Create, Read, Update, Delete

public interface PhonebookRepository extends CrudRepository<Phonebook, Long> {
	
}
