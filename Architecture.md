# Architecture

## Tech Stack

Framework:
React 19

Bundler:
Vite

Language:
TypeScript

Styling:
TailwindCSS

Animations:
GSAP
Framer Motion

Smooth Scroll:
Lenis

Icons:
Lucide React

Forms:
React Hook Form

Validation:
Zod

Deployment:
Vercel

---

## Folder Structure

src/

app/

components/

layout/

sections/

Hero

About

Projects

Process

Testimonials

BeforeAfter

FAQ

Contact

Footer

Navbar

ui/

Button

Heading

SectionTitle

ProjectCard

ImageReveal

AnimatedText

Cursor

hooks/

utils/

constants/

assets/

styles/

public/

---

## Architecture Rules

Every section is its own component.

Reusable UI belongs in ui/.

Never duplicate code.

Maximum component size:
200 lines.

Use custom hooks when logic repeats.

Use Context only if necessary.

Avoid prop drilling.

Lazy load heavy sections.

Images optimized.
