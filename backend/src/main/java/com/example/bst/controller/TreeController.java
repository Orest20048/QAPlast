package com.example.bst.controller;

import com.example.bst.model.TreeSubmission;
import com.example.bst.model.TreeSubmissionRequest;
import com.example.bst.repository.TreeSubmissionRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api")
@CrossOrigin(origins = "*")
public class TreeController {

    @Autowired
    private TreeSubmissionRepository repository;

    @PostMapping("/process-numbers")
    public TreeSubmission submitTree(@RequestBody TreeSubmissionRequest request) {
        TreeSubmission submission = new TreeSubmission();
        submission.setInputNumbers(request.getInput());
        submission.setTreeJson(request.getTreeJson());
        return repository.save(submission);
    }

    @GetMapping("/previous-trees")
    public List<TreeSubmission> getAllSubmissions() {
        return repository.findAll();
    }
}
