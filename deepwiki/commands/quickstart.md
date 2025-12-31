---
name: quickstart
description: 'Get a quick start guide. e.g. "/quickstart langchain-ai/langchain"'
arguments:
  - name: repo
    description: e.g. "langchain-ai/langchain" or "fastapi/fastapi"
    required: true
  - name: usecase
    description: e.g. "REST API" or "CLI tool" (optional)
    required: false
---

# Quick Start Guide

You are creating a quick start guide for: **$ARGUMENTS.repo**
Use case focus: $ARGUMENTS.usecase

## Instructions

1. Use `read_wiki_structure` with `repo_name: "$ARGUMENTS.repo"` to find getting started / installation sections

2. Identify and read the most relevant sections using `read_wiki_contents`:
   - Installation / Setup
   - Getting Started / Quick Start
   - Basic Usage / First Steps
   - Configuration (if essential)

3. Use `ask_question` to fill in any gaps:
   - "What are the minimum requirements to get started with this project?"
   - "What is the simplest example to verify the installation works?"
   - If a use case was specified: "How do I use this project for $ARGUMENTS.usecase?"

4. Present a streamlined, actionable quick start guide:

   ## Prerequisites
   - Required software/tools (with versions if important)
   - System requirements
   - Required accounts or API keys (if any)

   ## Installation

   ```bash
   # Step-by-step installation commands
   ```

   ## Basic Configuration
   Only include if configuration is required before first use.

   ```
   # Minimal configuration example
   ```

   ## Hello World Example
   The simplest possible working example.

   ```
   # Complete, copy-paste ready code
   ```

   ## Verify It Works
   How to confirm the installation and setup is successful.

   ## Next Steps
   - Link to key documentation sections for going deeper
   - Common next things people want to do

   ## Common Gotchas
   Quick notes on things that commonly trip up new users.

5. Keep it minimal and actionable:
   - Only include what's absolutely necessary to get running
   - Every code block should be copy-paste ready
   - Avoid explaining concepts - focus on doing
   - If there are multiple installation methods, recommend the most common one

6. If a specific use case was provided, tailor the example to that use case.
