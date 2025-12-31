---
name: deep-dive
description: 'Deep dive into a specific topic. e.g. "/deep-dive vercel/next.js authentication"'
arguments:
  - name: repo
    description: e.g. "vercel/next.js" or "pytorch/pytorch"
    required: true
  - name: topic
    description: e.g. "authentication" or "distributed training"
    required: true
---

# Deep Dive: $ARGUMENTS.topic

You are doing a comprehensive deep dive on **$ARGUMENTS.topic** in the repository: **$ARGUMENTS.repo**

## Instructions

1. First, use `read_wiki_structure` with `repo_name: "$ARGUMENTS.repo"` to get the full documentation structure

2. Analyze the structure and identify ALL sections that might relate to "$ARGUMENTS.topic":
   - Direct matches (sections named after the topic)
   - Related concepts (e.g., for "authentication": sessions, JWT, OAuth, middleware, security)
   - Implementation sections that might cover the topic
   - Best practices or guides mentioning the topic

3. Use `read_wiki_contents` to read the most relevant sections (prioritize 3-4 key sections)

4. Use `ask_question` with multiple targeted questions to fill gaps:
   - "How does $ARGUMENTS.topic work in this project?"
   - "What are the best practices for $ARGUMENTS.topic?"
   - "What are common patterns for implementing $ARGUMENTS.topic?"
   - "What are the configuration options related to $ARGUMENTS.topic?"

5. Synthesize everything into a comprehensive guide:

   ## Overview
   What is $ARGUMENTS.topic in the context of $ARGUMENTS.repo? Why does it matter?

   ## Core Concepts
   Key concepts and terminology you need to understand.

   ## How It Works
   Detailed explanation of how $ARGUMENTS.topic is implemented/handled.

   ## Implementation Guide

   ### Basic Implementation
   ```
   # Step-by-step code for basic usage
   ```

   ### Advanced Implementation
   ```
   # More complex scenarios
   ```

   ## Configuration Options
   All relevant configuration options with explanations.

   | Option | Type | Default | Description |
   |--------|------|---------|-------------|
   | ... | ... | ... | ... |

   ## Best Practices
   - Recommended approaches
   - Performance considerations
   - Security considerations (if applicable)

   ## Common Patterns
   Patterns frequently used in the community.

   ## Anti-Patterns & Pitfalls
   What to avoid and common mistakes.

   ## Integration with Other Features
   How $ARGUMENTS.topic interacts with other parts of the system.

   ## Examples
   Real-world examples demonstrating various use cases.

   ## Further Reading
   Links to relevant documentation sections for even deeper exploration.

6. Be thorough but organized. The goal is to make someone an expert on this specific topic within this repository.

7. If information is sparse, acknowledge limitations and suggest where users might find more information (GitHub issues, discussions, source code).
