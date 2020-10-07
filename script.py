#!/usr/bin/env python
# import json
# import urllib2
# from zipfile import ZipFile
# import shutil
# import os
# import sys
# import commands
# import cgi

# old_json_path = sys.argv[1]
# new_json_path = sys.argv[2]

# print "old_json_path: " + old_json_path
# print "new_json_path: " + new_json_path

with open("./file2.json") as newFile:
    newText = newFile.read()

with open("./android/app/google-services.json") as oldFile:
    oldText = oldFile.read()
    print("content in old google-services.json: " + oldText)

with open("./android/app/google-services.json", "w+") as oldFile:
    oldFile.write(newText)

with open("./android/app/google-services.json") as oldFile:
    oldText = oldFile.read()
    print("content in new google-services.json: " + oldText)

#---------------------------------

with open("./stylesToCopy.js") as newStyleFile:
    newStyleText = newStyleFile.read()

with open("./styles.js") as oldStyleFile:
    oldStyleText = oldStyleFile.read()

with open("./styles.js", "w+") as oldStyleFile:
    oldStyleFile.write(newStyleText)

with open("./styles.js") as oldStyleFile:
    oldStyleText = oldStyleFile.read()
