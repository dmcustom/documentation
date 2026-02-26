---
title: FAQ / Troubleshooting
hide_title: true
---

# Frequently Ask Question

These are the most frequently asked questions, along with explanations for why these issues occur.

## Why There Is No Sound During Testing in Unity
- Make sure the scene has a **Camera** positioned close to your avatar.
- Ensure that **Mute Audio** button is not enabled in the Game window.
- Use the latest version of [Gesture Manager](https://booth.pm/ja/items/3922472?srsltid=AfmBOorNhyQC8H3uU0CpaEoEBfJrnelkaT5MD-GRcsTh3hPsHCpz7B_i) to simulate interactions during testing.

## Why Aren’t DPS Triggering Sounds?
Legacy DPS Oriface does not include Avatar Contact Sender by default, so it cannot interact with LMS. In this case, you can use the SPS Socket instead.

## Why Aren’t World Props Triggering Sounds?
World props do not include Avatar Contact Sender by default, which is required for interaction with LMS. However, starting from the **SDK 3.10.0**, it is now possible to add Contact components to world objects.

## How to Add a Contact and Make It Interact With LMS?
1. Create an empty GameObject, then add the `VRC Contact Sender` component to it.
2. Adjust the shape, radius, and other settings as needed.
3. Under **Collision Tags**, click **Add**, select `Custom`, and enter: `LMS_Orf_Root`

## Why Does My LMS Object Have Missing Scripts?
Please make sure you have installed the correct Avatar Tool for your package, either Modular Avatar or VRCFury.

## How to Fix Incorrect Scaling (Too Big or Too Small)?
This issue is caused by your avatar’s Armature scale not being set to (1,1,1), which results in LMS being placed too large or too small. This is not your fault.
- To fix this, simply adjust the scale of the GameObject called `LMS Contact` to make it larger or smaller as needed.