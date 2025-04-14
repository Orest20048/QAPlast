package com.example.bst.model;

import jakarta.persistence.*;
import java.time.LocalDateTime;

@Entity
public class TreeSubmission {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String inputNumbers;

    @Column(columnDefinition = "TEXT")
    private String treeJson;

    private LocalDateTime submittedAt = LocalDateTime.now();

    public Long getId() { return id; }
    public String getInputNumbers() { return inputNumbers; }
    public String getTreeJson() { return treeJson; }
    public LocalDateTime getSubmittedAt() { return submittedAt; }

    public void setId(Long id) { this.id = id; }
    public void setInputNumbers(String inputNumbers) { this.inputNumbers = inputNumbers; }
    public void setTreeJson(String treeJson) { this.treeJson = treeJson; }
    public void setSubmittedAt(LocalDateTime submittedAt) { this.submittedAt = submittedAt; }
}
