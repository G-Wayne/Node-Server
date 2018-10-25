
Platform Library Example
~~~~~~~~~~~~~~~~~~~~~~~~
This directory contains a full example of writing your own Android platform
shared library, without changing the Android framework.  It also shows how to
write JNI code for incorporating native code into the library, and a client
application that uses the library.
This example is ONLY for people working with the open source platform to
create a system image that will be delivered on a device which will include
a custom library as shown here.  It can not be used to create a third party
shared library, which is not currently supported in Android.
To declare your library to the framework, you must place a file with a .xml
extension in the /system/etc/permissions directory with the following contents:
<?xml version="1.0" encoding="utf-8"?>
<permissions>
    <library name="com.example.android.platform_library"
            file="/system/framework/com.example.android.platform_library.jar"/>
</permissions>
There are three major parts of this example, supplying three distinct
build targets and corresponding build outputs:
com.example.android.platform_library
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
The top-level Android.mk defines the rules to build the shared library itself,
whose target is "com.example.android.platform_library".  The code for this
library lives under java/.
Note that the product for this library is a raw .jar file, NOT a .apk, which
means there is no manifest or resources associated with the library.
Unfortunately this means that if you need any resources for the library, such
as drawables or layout files, you will need to add these to the core framework
resources under frameworks/base/res.  Please make sure when doing this that
you do not make any of these resources public, they should not become part of
the Android API.  In the future we will allow shared libraries to have their
own resources.
Other than that, the library is very straight-forward, and you can write
basically whatever code you want.  You can also put code in other Java
namespaces -- the namespace given in the <library> tag above is just the
public unique name by which clients will link to your library, but once this
link happens all of the Java namespaces in that library will be available
to the client.
libplatform_library_jni
~~~~~~~~~~~~~~~~~~~~~~~
This is an optional example of how to write JNI code associated with a
shared library.  This code lives under jni/.  The jni/Android.mk file defines
the rules for building the final .so in which the code lives.  This example
provides everything needed to hook up the native code with the Java library
and call through to it, plus a very simple JNI call.
PlatformLibraryClient
~~~~~~~~~~~~~~~~~~~~~
This shows an example of how you can write client applications for your new
shared library.  This code lives under client/.  Note that the example is
simply a regular Android .apk, like all of the other .apks created by the
build system.  The only two special things needed to use your library are:
- A LOCAL_JAVA_LIBRARIES line in the Android.mk to have the build system link
against your shared library.
- A <uses-library> line in the AndroidManifest.xml to have the runtime load
your library into the application.


ASP.NET MVC APPLICATION : CSASPNETMVCFileDownload Project Overview
========================================================================

/////////////////////////////////////////////////////////////////////////////
Use:

 The project illustrates how to perform file downloading in ASP.NET MVC
 web application.

 The detailed functionality include how to use MVC routing to register
 a custom url routing pattern for our file download processing. Include:

 * how to display a file list for downloading
 * how to stream out file content in MVC web page

 and the sample application also include a custom ActionResult class
  which is used to output the file content(binary format).


/////////////////////////////////////////////////////////////////////////////
Prerequisite:

Visual Studio 2008 SP1 with ASP.NET MVC 1.0 extension installed.

*ASP.NET MVC 1.0 RTM download:
http://www.microsoft.com/downloads/details.aspx?FamilyID=53289097-73ce-43bf-b6a6-35e00103cb4b&displaylang=en


/////////////////////////////////////////////////////////////////////////////
Demo:

*open the project

*select  default.aspx page and view it in browser

*in the main page UI, select the "FileDownload" tab

*click any file link to download the certain file


/////////////////////////////////////////////////////////////////////////////
Code Logical:

Step1. Create a Visual Studio 2008 SP1 ASP.NET MVC Web Application project

Step2. Clear unnecessary parts in the project, including: scripts for jquery,
      controller and view for account management...

Step3: Add our FileDownload Controller class and the corresponding view files
      For more information about how to create Controller class, refer to:
      http://www.asp.net/learn/mvc/#MVC_Controllers

Step4: Add a custom ActionResult class for output file content

Step5: Add the proper URL routing rules in global.asax file's events. The
      Routing rules are very important for connecting the requests to the
      proper MVC Controller and Action methods. For detailed info, refer to:
      http://weblogs.asp.net/scottgu/archive/2007/12/03/asp-net-mvc-framework-part-2-url-routing.aspx


Key components:

* web.config file: contains all the necessary configuration information of
 this web application

* global.asax: contains all the URL routing rules

* HomeController class: contains the main application
   navigation logic(such as default page and about page)

* FileController class: contains the navigation and processing logic of the
 FileDownloading function(include file list and file download)

* Home Views: the page UI elements for HomeController

* File Views: the page UI elements for FileController

* shared Views & Site.Master: those UI elements shared by all page UI

* BinaryContentResult: Custom ActionResult class used for outputting file
 content(as binary format)


/////////////////////////////////////////////////////////////////////////////
References:

#ASP.NET MVC Tutorials
http://www.asp.net/Learn/mvc/
