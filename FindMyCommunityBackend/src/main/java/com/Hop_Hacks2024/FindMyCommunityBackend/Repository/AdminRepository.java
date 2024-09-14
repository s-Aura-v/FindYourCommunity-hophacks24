package com.Hop_Hacks2024.FindMyCommunityBackend.Repository;

import com.Hop_Hacks2024.FindMyCommunityBackend.Model.Admin;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface AdminRepository extends MongoRepository<Admin, String> {
}
