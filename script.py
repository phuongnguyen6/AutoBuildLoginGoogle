
import json
import urllib2
from zipfile import ZipFile
import shutil
import os
import sys
import commands
import cgi

# old_json_path = sys.argv[1]
# new_json_path = sys.argv[2]

# print "old_json_path: " + old_json_path
# print "new_json_path: " + new_json_path

with open("./file2.json") as newFile:
    newText = newFile.read()

with open("./android/app/google-services.json") as oldFile:
    oldText = oldFile.read()
    print("content in old google-services.json: " + oldText)

with open("./android/app/google-services.json", "wb+") as oldFile:
    oldFile.write(newText)

with open("./android/app/google-services.json") as oldFile:
    oldText = oldFile.read()
    print("content in new google-services.json: " + oldText)

#---------------------------------

with open("./stylesToCopy.js") as newFile:
    newText = newFile.read()

with open("./styles.js") as oldFile:
    oldText = oldFile.read()

with open("./styles.js", "wb+") as oldFile:
    oldFile.write(newText)

with open("./styles.js") as oldFile:
    oldText = oldFile.read()
