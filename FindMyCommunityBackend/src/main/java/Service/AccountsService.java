package Service;

import Model.Account;
import Repository.AccountsRepository;
import org.springframework.beans.factory.annotation.Autowired;

import java.util.Optional;

public class AccountsService {
    private AccountsRepository accountsRepository;

    @Autowired
    public AccountsService(AccountsRepository accountsRepository) {
        this.accountsRepository = accountsRepository;
    }

    public Account saveReservation(Account account){
        return accountsRepository.save(account);
    }

    public Iterable<Account> getAllReservations(){
        return accountsRepository.findAll();
    }

    public void deleteAllReservations(){
        accountsRepository.deleteAll();
    }

    public void deleteReservationById(String id){
        accountsRepository.deleteById(id);
    }

    public Optional<Account> findReservationById(String id){
        return accountsRepository.findById(id);
    }
}

