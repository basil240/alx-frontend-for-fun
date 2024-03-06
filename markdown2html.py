#!/usr/bin/python3

"""
markdown2html.py: Convert Markdown file to HTML file.

Usage:
./markdown2html.py README.md README.html
"""

import sys
import markdown

def convert_markdown_to_html(input_file, output_file):
    try:
        with open(input_file, 'r') as f:
            markdown_text = f.read()
            html_text = markdown.markdown(markdown_text)
            with open(output_file, 'w') as f_out:
                f_out.write(html_text)
    except FileNotFoundError:
        print(f"Missing {input_file}", file=sys.stderr)
        sys.exit(1)

if __name__ == "__main__":
    if len(sys.argv) != 3:
        print("Usage: ./markdown2html.py README.md README.html", file=sys.stderr)
        sys.exit(1)

    input_file = sys.argv[1]
    output_file = sys.argv[2]

    convert_markdown_to_html(input_file, output_file)
    sys.exit(0)