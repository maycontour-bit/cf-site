import re

with open('app/globals.css', 'r') as f:
    content = f.read()

# Fix section-tag
content = re.sub(
    r'(\.section-tag\s*\{[^}]*?font-size:\s*)[^;]+(;)',
    r'\g<1>1rem\g<2>',
    content
)

# Fix section-title
content = re.sub(
    r'(\.section-title\s*\{[^}]*?font-size:\s*)[^;]+(;)',
    r'\g<1>clamp(1.8rem, 3.5vw, 2.8rem)\g<2>',
    content
)

# Fix section-subtitle
content = re.sub(
    r'(\.section-subtitle\s*\{[^}]*?font-size:\s*)[^;]+(;)',
    r'\g<1>1.15rem\g<2>',
    content
)

# Fix hero h1
content = re.sub(
    r'(\.hero h1\s*\{[^}]*?font-size:\s*)[^;]+(;)',
    r'\g<1>clamp(2.2rem, 4vw, 3.2rem)\g<2>',
    content
)

# Fix hero-subtitle
content = re.sub(
    r'(\.hero-subtitle\s*\{[^}]*?font-size:\s*)[^;]+(;)',
    r'\g<1>1.15rem\g<2>',
    content
)

with open('app/globals.css', 'w') as f:
    f.write(content)
