package wright.bennett.boardgamecalc.splendor.developmentcard;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;

@Entity
public class DevelopmentCard {
  @Id
  @GeneratedValue(strategy=GenerationType.AUTO)
  private Integer id;

  private String color;

  private Integer level;

  @Column(name = "white_cost")
  private Integer whiteCost;

  @Column(name = "blue_cost")
  private Integer blueCost;

  @Column(name = "black_cost")
  private Integer blackCost;

  @Column(name = "red_cost")
  private Integer redCost;

  @Column(name = "green_cost")
  private Integer greenCost;

  public Integer getId() {
    return id;
  }

  public void setId(Integer id) {
    this.id = id;
  }

  public String getColor() {
    return color;
  }

  public void setColor(String color) {
    this.color = color;
  }

  public Integer getLevel() {
    return level;
  }

  public void setLevel(Integer level) {
    this.level = level;
  }

  public Integer getWhiteCost() {
    return whiteCost;
  }

  public void setWhiteCost(Integer whiteCost) {
    this.whiteCost = whiteCost;
  }

  public Integer getBlueCost() {
    return blueCost;
  }

  public void setBlueCost(Integer blueCost) {
    this.blueCost = blueCost;
  }

  public Integer getBlackCost() {
    return blackCost;
  }

  public void setBlackCost(Integer blackCost) {
    this.blackCost = blackCost;
  }

  public Integer getRedCost() {
    return redCost;
  }

  public void setRedCost(Integer redCost) {
    this.redCost = redCost;
  }

  public Integer getGreenCost() {
    return greenCost;
  }

  public void setGreenCost(Integer greenCost) {
    this.greenCost = greenCost;
  }
}
