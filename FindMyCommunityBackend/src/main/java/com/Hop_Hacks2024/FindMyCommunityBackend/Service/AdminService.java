package com.Hop_Hacks2024.FindMyCommunityBackend.Service;

import com.Hop_Hacks2024.FindMyCommunityBackend.Model.Admin;
import com.Hop_Hacks2024.FindMyCommunityBackend.Repository.AdminRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
public class AdminService {

    AdminRepository adminRepository;
    @Autowired
    public AdminService(AdminRepository adminRepository) {
        this.adminRepository = adminRepository;
    }

    public Admin saveEvent(Admin admin){
        return adminRepository.save(admin);
    }

    public Iterable<Admin> getAllEvents(){
        return adminRepository.findAll();
    }

    public void deleteAllEvents(){
        adminRepository.deleteAll();
    }

    public void deleteEventById(String id){
        adminRepository.deleteById(id);
    }

    public Optional<Admin> findEventById(String id){
        return adminRepository.findById(id);
    }
}
