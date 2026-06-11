---
title: "RF Constructor"
shortDescription: "A browser tool that converts table-heavy DOCX documents into structured JSON — so the same document can be rendered, filled in, and edited as a form on the web, then saved back to DOCX."
githubUrl: "https://github.com/Iulianmalovanyi/RF-Constructor"
liveUrl: "https://iulianmalovanyi.github.io/RF-Constructor/"
image: "/projects/rf-constructor.png"
imageAlt: "RF Constructor: an editable JSON panel on the left and a live, interactive form preview on the right."
features:
  - "Upload a .docx document and get a structured JSON file."
  - "Upload a JSON file and get a .docx document back."
  - "Click any element in the document preview to jump straight to its matching place in the JSON."
  - "Edit the JSON and see the document update live, as you type."
order: 1
fullDescription: |
  A lot of business documents are really just structured tables trapped inside a Word file. That format is fine for printing or archiving, but it's awkward to work with on the web — you can't easily render the document as a form, pre-populate it, or capture what a user types back into it.

  RF Constructor bridges those two worlds. Upload a .docx document and it's parsed into structured JSON that mirrors the document's tables and fields. The JSON is editable in a Monaco editor on the left, with the document rendered live as an interactive form on the right. Editing the JSON updates the preview as you type, and clicking an element in the preview highlights the matching JSON — so the data and the document stay in sync.

  The point is a clean round-trip. A document becomes JSON so it can be handled properly on the web — rendered as a form, pre-populated, and filled in by an end user — and the result can then go back to DOCX for saving or sharing. One structure, usable both as web data (JSON) and as a document (DOCX).

  I built it during discovery, to make that idea tangible and easy to demonstrate. Built with React and Vite, mammoth.js for DOCX parsing, the Monaco editor for JSON editing, and Tailwind.
---
