#!/usr/bin/python3

"""
markdown2html.py: Convert Markdown file to HTML file, parsing heading, list, paragraph, and bold syntax.

Usage:
./markdown2html.py README.md README.html
"""

import sys
import markdown
import re
import hashlib

def convert_markdown_to_html(input_file, output_file):
    try:
        with open(input_file, 'r') as f:
            markdown_text = f.read()
            html_text = markdown.markdown(markdown_text)
            html_text = parse_headings(html_text)
            html_text = parse_unordered_list(html_text)
            html_text = parse_ordered_list(html_text)
            html_text = parse_paragraphs(html_text)
            html_text = parse_bold_md5(html_text)
            html_text = parse_bold_remove_c(html_text)
            with open(output_file, 'w') as f_out:
                f_out.write(html_text)
    except FileNotFoundError:
        print(f"Missing {input_file}", file=sys.stderr)
        sys.exit(1)

def parse_headings(html_text):
    headings = {
        '# ': '<h1>', 
        '## ': '<h2>', 
        '### ': '<h3>', 
        '#### ': '<h4>', 
        '##### ': '<h5>', 
        '###### ': '<h6>'
    }

    for key, value in headings.items():
        html_text = html_text.replace(key, value)
        html_text = html_text.replace(key.strip(), value)

    html_text = html_text.replace('#', '<h1>')
    return html_text

def parse_unordered_list(html_text):
    html_text = html_text.replace('<ul>', '\n<ul>')
    html_text = html_text.replace('</ul>', '</ul>\n')
    html_text = html_text.replace('<li>', '<li>')

    return html_text

def parse_ordered_list(html_text):
    html_text = html_text.replace('<ol>', '\n<ol>')
    html_text = html_text.replace('</ol>', '</ol>\n')
    html_text = html_text.replace('<li>', '<li>')

    return html_text

def parse_paragraphs(html_text):
    html_text = html_text.replace('<p>', '\n<p>\n')
    html_text = html_text.replace('</p>', '\n</p>\n')
    html_text = html_text.replace('<br>', '<br/>')

    return html_text

def parse_bold_md5(html_text):
    bold_md5_pattern = r'\[\[(.*?)\]\]'
    bold_matches = re.findall(bold_md5_pattern, html_text)
    for match in bold_matches:
        html_text = html_text.replace(f'[[{match}]]', hashlib.md5(match.encode()).hexdigest())
    return html_text

def parse_bold_remove_c(html_text):
    bold_remove_c_pattern = r'\(\((.*?)\)\)'
    bold_matches = re.findall(bold_remove_c_pattern, html_text)
    for match in bold_matches:
        html_text = html_text.replace(f'(({match}))', match.replace('c', ''))
    return html_text

if __name__ == "__main__":
    if len(sys.argv) != 3:
        print("Usage: ./markdown2html.py README.md README.html", file=sys.stderr)
        sys.exit(1)

    input_file = sys.argv[1]
    output_file = sys.argv[2]

    convert_markdown_to_html(input_file, output_file)
    sys.exit(0)