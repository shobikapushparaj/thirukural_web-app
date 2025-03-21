## Assignment: Thirukkural Frontend Interface

### Objective

Build an interactive web-based frontend application for browsing Thirukkural chapters and their associated couplets (kurals). 

Use the following API endpoint https://thirukkural-api-f2606ac98b94.herokuapp.com/docs/swagger/. API key will be shared separately.

### Requirements

1. **Tech Stack:**

   - Choose any frontend framework/library and you can use any CSS framework for the UI.
   - API interactions must utilize the provided API schema (as shown in the screenshot).

2. **UI Constraints:**

   - **Two-Pane Layout:**
     - **Left Pane:** List of all Thirukkural chapters.
     - **Right Pane:** Display 10 couplets (kurals) associated with the selected chapter.
   - Have a pagination bar at the bottom of the screen.

3. **Functionality:**

   - On initial load, automatically fetch and display all chapters on the left pane.
   - Selecting a chapter from the left pane should trigger an API call to fetch and display the corresponding kurals on the right pane.


