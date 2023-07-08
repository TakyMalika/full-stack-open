```mermaid
sequenceDiagram;
    participant browser
    participant server

    browser->>server: POST https://studies.cs.helsinki.fi/exampleapp/new_note_spa
    activate server
    server->>browser: the new note as JSON data containing both the content of the note (content) and the timestamp (date)
    deactivate server
```