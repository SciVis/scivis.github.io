---
layout: staff
title: Daniel Jönsson
subheadline: Explore organ function and doing so in an efficient manner.
name: Daniel Jönsson
position: Assistant Professor
staffimage: employee_image_danjo37.jpeg
breadcrumb: true
contact:
    email: daniel.jonsson@liu.se
    phone: +46 11 36
    address: Kopparhammaren 2, Entrance 10A, Room 2051, Campus Norrköping
    orcid: 0000-0002-5220-633X
---

## Solving the organ function visualization puzzle

### Helping the radiologist

Radiologists love images! Their daily work consists of looking at images of a patient’s internal organs and determining if the patient is sick or healthy. The images of the internal organs are produced by scanners at the hospital. 

<div class="row">
<div class="columns medium-8" markdown="1">
The scanners of the early nineties could only produce a handful of images for the radiologist to make a diagnosis.

Scanners today can scan the whole body and produce thousands of images with millimeter resolution of a single patient. Upcoming scanners are able to scan over time and thereby record movements inside the body. This is a fantastic opportunity since it allows a radiologist to make a diagnosis based on the function of the organs as they are moving.
</div>
<div class="columns medium-4">
    <figure>
        <img src="/images/Organ-brain-scanning-2-daniel-jonsson-liu.jpg" width="300" alt="Human brain, scanned" itemprop="image">
        <figcaption class="text-right">
            Human brain, scanned
        </figcaption>
    </figure>
</div>
</div>



However, it is impossible for the radiologist to use the same workflow to investigate hundreds of thousands of images that can be produced by the new scanners. New tools are needed that can visualize relevant information and at the same time manage the enormous amount of data that is produced. 

### High volume scanning – still high quality image

To support the radiologists in their work I do research on methods that can deal with the large amount of data that is produced by the scanners while maintaining high image quality.  

<div class="row">
    <div class="columns medium-4">
<figure>
    <img src="/images/Organ-scanning-2-daniel-jonsson-liu.jpg" width="300" alt="" itemprop="image">
</figure>
</div>
<div class="columns medium-8" markdown="1">
Algorithms that produce high image quality require expensive computations, which prevent large amount of data to be handled. In order to solve this puzzle we try to answer the question: If the images look similar over time, can we reduce the amount of work by making use of computations that was made before?
</div>
</div>

We first try to identify which part of an algorithm that can be changed such that computations can be reused. We then investigate what information that needs to be supplied in order to know which computations that should be redone. Given these two pieces of the puzzle we face the challenge of determining how to alter the algorithm and implementation such that it becomes more efficient than redoing everything in the first place.

In addition to these two pieces of the puzzle we can add a third piece that tells us which information the radiologist is interested in. This last piece allows us to focus on giving the best representation of the relevant data and to filter away the unnecessary parts.



### Improved interface
<div class="row">
<div class="columns medium-8" markdown="1">
Another part of my research is of a softer nature. Radiologists require easy to use tools in their daily work but at the same time they must be powerful enough to visualize the desired information. The challenge here lies in combining the design of the tool with the underlying technique. The quest is to have few and easy to understand parameters to change. We therefore investigate how we can either change the algorithms to make the input more intuitive by nature, or how we can create intuitive parameters that are mapped to the input of the algorithm.

These two research directions aim to enable the radiologist to be able to explore organ function and doing so in an efficient manner.
</div>
<div class="columns medium-4">
    <figure>
        <img src="/images/Daniel-Jonsson-med-MIT-kollegor_DSC3920.jpg" width="300" alt="Daniel Jönsson at a workshop with MIT colleagues." itemprop="image" style="margin-left:auto;">
        <figcaption class="text-right">
            Photo credit: Thor Balkhed
        </figcaption>
    </figure>
</div>
</div>