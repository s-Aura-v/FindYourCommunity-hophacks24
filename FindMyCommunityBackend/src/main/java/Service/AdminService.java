package Service;

import Model.Admin;
import Model.Event;
import Repository.AdminRepository;
import Repository.EventRepository;
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
