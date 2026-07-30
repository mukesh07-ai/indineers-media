import os
import glob

def fix_file(filepath):
    with open(filepath, 'r') as f:
        content = f.read()

    # Replace specific quotes that are causing issues
    content = content.replace("India's", "India&apos;s")
    content = content.replace("country's", "country&apos;s")
    content = content.replace("'bottom of the pyramid'", "&lsquo;bottom of the pyramid&rsquo;")
    content = content.replace("'National Skills Qualification Framework'", "&lsquo;National Skills Qualification Framework&rsquo;")

    with open(filepath, 'w') as f:
        f.write(content)

for filepath in glob.glob('frontend/components/about/*.tsx'):
    fix_file(filepath)

print("Fixed quotes")
