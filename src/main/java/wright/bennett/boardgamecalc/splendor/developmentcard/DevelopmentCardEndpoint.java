package wright.bennett.boardgamecalc.splendor.developmentcard;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping(path = "/development-cards")
public class DevelopmentCardEndpoint {
  @Autowired
  private DevelopmentCardRepository repo;

  @GetMapping
  public Iterable<DevelopmentCard> getCards() {
    return repo.findAll();
  }
}
