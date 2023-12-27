package hac.repo;

import hac.repo.Purchase;
import hac.repo.PurchaseRepository;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
public class PurchaseController{

    private final PurchaseRepository purchaseRepository ;


    // for adding a purchase record
    public PurchaseController(PurchaseRepository purchaseRepository){
        this.purchaseRepository = purchaseRepository ;

    }

    // get all purchases
    @PostMapping("/api/checkout")
    public ResponseEntity<Purchase> createPurchase(@RequestBody Purchase purchase){
        Purchase savedPurchase = purchaseRepository.save(purchase);
        return ResponseEntity.ok(savedPurchase);
    }

    @GetMapping("/debug/purchases")
    public ResponseEntity<List<Purchase>> getAllPurchases(){
        List<Purchase> purchases = purchaseRepository.findAll();
        return ResponseEntity.ok(purchases);
    }

}