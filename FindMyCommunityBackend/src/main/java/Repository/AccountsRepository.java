package Repository;

import Model.Account;
import org.springframework.data.mongodb.repository.MongoRepository;

public interface AccountsRepository extends MongoRepository<Account, String> {

}
