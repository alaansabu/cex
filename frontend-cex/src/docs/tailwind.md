================================================================================
          TAILWIND CSS TO RAW CSS EQUIVALENTS CHEAT SHEET
================================================================================
A simple, copyable mapping reference showing the utility class, its raw CSS
property equivalent, and a plain-text description of what it does.

--------------------------------------------------------------------------------
1. LAYOUT & DISPLAYS
--------------------------------------------------------------------------------
* flex
  - CSS Equivalent: display: flex;
  - Description: Activates a flexbox context so you can align child elements 
    horizontally or vertically.

* grid
  - CSS Equivalent: display: grid;
  - Description: Activates a grid context, letting you arrange child elements 
    into structured rows and columns.

* block
  - CSS Equivalent: display: block;
  - Description: Forces an element to take up the full width of its parent 
    and start on a completely new line.

* hidden
  - CSS Equivalent: display: none;
  - Description: Completely hides the element from view and removes it from 
    the page layout entirely.

--------------------------------------------------------------------------------
2. FLEXBOX ALIGNMENT & POSITIONING
--------------------------------------------------------------------------------
* items-center
  - CSS Equivalent: align-items: center;
  - Description: Aligns and centers child elements vertically inside a 
    flex container.

* justify-center
  - CSS Equivalent: justify-content: center;
  - Description: Aligns and centers child elements horizontally inside a 
    flex container.

* justify-between
  - CSS Equivalent: justify-content: space-between;
  - Description: Spreads elements out evenly; the first item snaps to the far 
    left, the last item snaps to the far right, and space is added between them.

--------------------------------------------------------------------------------
3. SPACING (PADDINGS & MARGINS)
--------------------------------------------------------------------------------
* p-4
  - CSS Equivalent: padding: 1rem; /* 16px */
  - Description: Adds inner spacing evenly on all four sides inside the element.

* py-2
  - CSS Equivalent: padding-top: 0.5rem; padding-bottom: 0.5rem; /* 8px */
  - Description: Adds inner spacing exclusively to the top and bottom.

* px-3
  - CSS Equivalent: padding-left: 0.75rem; padding-right: 0.75rem; /* 12px */
  - Description: Adds inner spacing exclusively to the left and right sides.

* mb-6
  - CSS Equivalent: margin-bottom: 1.5rem; /* 24px */
  - Description: Pushes elements down by adding empty outer spacing beneath the 
    bottom edge of the element.

--------------------------------------------------------------------------------
4. SIZING (WIDTHS & HEIGHTS)
--------------------------------------------------------------------------------
* w-full
  - CSS Equivalent: width: 100%;
  - Description: Forces the element to expand and occupy 100% of the available 
    width of its parent box.

* max-w-md
  - CSS Equivalent: max-width: 28rem; /* 448px */
  - Description: Sets a hard ceiling on width, preventing the element from 
    stretching too wide on larger screens.

* min-h-screen
  - CSS Equivalent: min-height: 100vh;
  - Description: Guarantees the element's height will stretch down to at least 
    the full height of the browser screen.

--------------------------------------------------------------------------------
5. BORDERS & ROUNDED CORNERS
--------------------------------------------------------------------------------
* border
  - CSS Equivalent: border-width: 1px; border-style: solid;
  - Description: Applies a solid, uniform 1-pixel structural border outline.

* border-slate-300
  - CSS Equivalent: border-color: rgb(203, 213, 225);
  - Description: Tints the border line with a soft, clean, neutral metallic gray.

* rounded-lg
  - CSS Equivalent: border-radius: 0.5rem; /* 8px */
  - Description: Rounds off sharp corner edges to give buttons, cards, and inputs 
    a smooth, modern aesthetic.

--------------------------------------------------------------------------------
6. TYPOGRAPHY & TEXT STYLES
--------------------------------------------------------------------------------
* text-sm
  - CSS Equivalent: font-size: 0.875rem; line-height: 1.25rem;
  - Description: Scales text down slightly—perfect for input labels, captions, or helper text.

* text-2xl
  - CSS Equivalent: font-size: 1.5rem; line-height: 2rem;
  - Description: Enlarges the font size significantly to create a distinct, prominent header.

* font-bold
  - CSS Equivalent: font-weight: 700;
  - Description: Increases text thickness heavily to draw strong visual focus to titles or actions.

* text-center
  - CSS Equivalent: text-align: center;
  - Description: Centers all inline typographic contents smoothly along the middle line.

--------------------------------------------------------------------------------
7. INTERACTIVE EFFECTS & HOVER STATES
--------------------------------------------------------------------------------
* shadow-md
  - CSS Equivalent: box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
  - Description: Injects a soft drop-shadow underneath the element to give it 
    the appearance of floating slightly above the background.

* bg-blue-600
  - CSS Equivalent: background-color: rgb(37, 99, 235);
  - Description: Fills the entire inner canvas of the element with a bright, 
    solid primary blue.

* hover:bg-blue-700
  - CSS Equivalent: &:hover { background-color: rgb(29, 78, 216); }
  - Description: Detects the mouse pointer; the instant a user hovers over the 
    element, it transitions the background fill to a deeper, darker blue.

* transition-all
  - CSS Equivalent: transition-property: all; transition-duration: 150ms;
  - Description: Directs the browser to animate property updates smoothly over 
    time rather than executing instant, jagged style snaps.
================================================================================