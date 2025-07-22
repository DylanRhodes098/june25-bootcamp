### Questions to Explore:

1. **Grid Layout Understanding**:

   - **Question**: In the `.dashboard-container` grid, how are the areas "header", "sidebar", and "main" laid out on the page? How does the `grid-template-areas` property affect the structure, and what would happen if you removed this property?
   - ANSWER: The header consumes the full width of the top row. The second row, sidebar consumes 250px width and the main consumes the rest.  


2. **Grid Tracks and Flexibility**:

   - **Question**: The `grid-template-columns: 250px 1fr;` is used to define the width of the sidebar and the main content area. What do the values `250px` and `1fr` represent, and how does the `1fr` unit differ from using a fixed width like `500px` for the second column?
   - ANSWER: 250px is a fixed width, and will be the same no matter what the rest of the row/column metrics are. Whereas, fr depends on the other metrics within that row. What fr does is consumes the "leftover space". 1fr will take up the full width. whereas 500px would take up 500 px width. 

3. **Grid Rows and Auto Sizing**:

   - **Question**: The CSS sets `grid-template-rows: auto 1fr;` in the `.dashboard-container`. What do `auto` and `1fr` do for the height of the rows, and how would changing `1fr` to `auto` affect the layout?
   - ANSWER: Auto listens to the exact properties of the element. If a table had height 10px and width 100px, auto would listen to that. If auto switched to 1fr, the 2 elements woul dhave the width, its like syaing 50% width and 50% width. 

4. **Responsive Design and Adjustments**:

   - **Question**: The current grid layout divides the page into two columns with a sidebar and main content. How would you modify the grid to create a single-column layout (with the header, sidebar, and main content stacked vertically) on smaller screen sizes (e.g., for mobile devices)?
   - ANSWER: For mobile-devides, you would add a media query "#mobile-menu". Snaller screens you would add an sm-x px at the top of the mediaquery. To modify the grid for a single-column layout, grid-templte-column should only have 1 metric, whether that be 1fr, auto or px. Furthermore, the grid-template-area should only have one clss on each row. 

5. **Grid Gaps and Spacing**:
   - **Question**: The `.dashboard-container` grid uses a `gap: 10px;` property. What effect does this property have on the layout? How would you change the CSS if you wanted to have a 10px horizontal gap between columns but no gap between rows?
   - ANSWER: Gap is similar to margin, it allows space between items. To implement a 10px horizontal gap, you would set the gap to 10px, but use justify-content and ste it to space-between. 
