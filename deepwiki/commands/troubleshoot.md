---
name: troubleshoot
description: 'Get help with issues and errors. Example: "/troubleshoot vitejs/vite build errors"'
arguments:
  - name: repo
    description: owner/repo (e.g., vitejs/vite)
    required: true
  - name: issue
    description: The issue or error (e.g., "build errors", "CORS issues")
    required: true
---

# Troubleshooting: $ARGUMENTS.issue

You are helping troubleshoot **"$ARGUMENTS.issue"** in the repository: **$ARGUMENTS.repo**

## Instructions

1. First, use `read_wiki_structure` with `repo_name: "$ARGUMENTS.repo"` to find troubleshooting-related sections:
   - Troubleshooting guides
   - FAQ
   - Common issues / Known issues
   - Migration guides (if the issue might be version-related)

2. Use `read_wiki_contents` to read relevant troubleshooting documentation

3. Use `ask_question` with targeted diagnostic questions:
   - "What causes $ARGUMENTS.issue and how do I fix it?"
   - "What are common causes of $ARGUMENTS.issue?"
   - "How do I debug $ARGUMENTS.issue?"
   - "What configuration might cause $ARGUMENTS.issue?"

4. Present a structured troubleshooting guide:

   ## Understanding the Issue
   Brief explanation of what "$ARGUMENTS.issue" typically means in the context of $ARGUMENTS.repo.

   ## Quick Fixes
   Try these first - they solve the problem in most cases:

   1. **[Most Common Fix]**
      ```
      # Command or code to fix
      ```
      Why this works: [brief explanation]

   2. **[Second Most Common Fix]**
      ```
      # Command or code
      ```

   3. **[Third Option]**
      ...

   ## Diagnostic Steps
   If quick fixes didn't work, follow these steps to identify the root cause:

   1. **Check X**
      ```
      # How to check
      ```
      What to look for: ...

   2. **Verify Y**
      ...

   ## Common Causes & Solutions

   ### Cause 1: [Description]
   **Symptoms:** What you'd see if this is the cause
   **Solution:**
   ```
   # How to fix
   ```

   ### Cause 2: [Description]
   **Symptoms:** ...
   **Solution:** ...

   ### Cause 3: [Description]
   ...

   ## Environment-Specific Issues
   Issues that might be specific to:
   - **Windows:** ...
   - **macOS:** ...
   - **Linux:** ...
   - **Docker:** ...

   ## Version Compatibility
   Known issues with specific versions and how to resolve them.

   ## Prevention
   How to avoid this issue in the future.

   ## Still Stuck?
   - Where to search for more help (GitHub issues, Discord, Stack Overflow)
   - What information to include when asking for help
   - Links to relevant documentation sections

5. Prioritize actionable solutions over explanations. Users troubleshooting want to fix things quickly.

6. If the issue is vague, provide a diagnostic flowchart to help narrow down the specific problem.

7. Include exact commands and code that can be copy-pasted.
