import useBaseUrl from '@docusaurus/useBaseUrl';

# วิธีการใช้งาน

เนื่องจาก LMS ใช้ระบบ Avatar Contact ในการตรวจจับ ดังนั้นคุณจำเป็นต้องเปิดใช้งานสิทธิ์การสัมผัสระหว่างผู้เล่น (player-to-player contact permissions) ในเมนูตั้งค่าเกม มิฉะนั้น LMS จะไม่สามารถทำงานได้!

โดยค่าเริ่มต้น ระบบสามารถตรวจจับการสอดใส่หรือการโต้ตอบกับ SPS Plugs และนิ้วของอวาตาร์ได้ หากต้องการให้ LMS ตรวจจับกับสิ่งของอื่นนอกเหนือจากนี้ โปรดอ่านเพิ่มเติมได้ที่ [How to Add Contact](./faq#how-to-add-a-contact-and-make-it-interact-with-pcs)

## 1. การตั้งค่า Avatar Interaction
นี่คือการตั้งค่าภายในเกมที่จำเป็นต้องทำเพื่อเปิดใช้งานระบบ Avatar Contact
<img src={useBaseUrl('/img/pcs-contact-setting.png')} width="540" />
- **Pause Avatar Interaction** > `OFF`
- **Avatar Allowed to Interact** > `Friends, Everyone`
- **Avatar Self Interact** > `ON`

## 2.  เปิดใช้งาน LMS
1. เข้าไปที่เมนู LMS แล้วสลับเมนู **ON/OFF** ให้เป็น `ON`
2. เมื่อมีการสัมผัสจากมือ หรือ SPS Socket ระบบจะสร้างเสียงตามที่ตั้งค่าไว้

:::tip Tip
หากคุณอยู่ในบทบาทฝ่ายที่เป็นผู้เคลื่อนไหว คุณสามารถใช้โหมด **Self-Service** เพื่อสร้างเสียงได้ง่ายขึ้น เมนูนี้ช่วยให้คุณสร้างเสียงตามการเคลื่อนไหวของตัวเองได้ แม้จะไม่ได้มีการสัมผัสกับผู้อื่นก็ตาม
:::

## Explanation of Expression Menu

| รูปประกอบ | คำอธิบาย |
|---|---|
| <img src={useBaseUrl('/img/menu/lms-menu-on.png')} width="128" /> | <div><strong>On/Off</strong><br/>เมนูนี้เป็นสวิตช์หลักสำหรับควบคุมการทำงานทั้งหมด หากปิดเมนูนี้ ระบบทุกอย่างจะหยุดทำงานทันที</div> |
| <img src={useBaseUrl('/img/menu/pcs-menu-self-service.png')} width="128" /> | <div><strong>Self-Service</strong><br/>เมื่อเปิดใช้งาน **Self-Service** อวาตาร์ของคุณจะหยุดตอบสนองต่อการกระทำจากผู้อื่น และจะตอบสนองเฉพาะการเคลื่อนไหวของคุณเองเท่านั้น นอกจากนี้ คุณยังสามารถสร้างเสียงได้แม้ไม่มีการโต้ตอบกับผู้อื่น</div> |
| <img src={useBaseUrl('/img/menu/pcs-menu-smash.png')} width="128" /> | <div><strong>Smash Hit</strong><br/>เมนูนี้ใช้สำหรับเปิดหรือปิดเสียงจากการกระแทกของร่างกาย</div> |
| <img src={useBaseUrl('/img/menu/pcs-menu-self-touch.png')} width="128" /> | <div><strong>Self-Touch</strong><br/>เมนูนี้ควบคุมฟีเจอร์การโต้ตอบกับตนเอง เมื่อเปิดใช้งาน เจ้าของอวาตาร์สามารถกระตุ้นเสียงผ่านการสัมผัสตนเองได้ รวมถึงการสร้างเสียงจากนิ้วหรือตัวอุปกรณ์ของเจ้าของ แต่หากปิดใช้งาน เจ้าของจะไม่สามารถสัมผัสตนเองได้ อย่างไรก็ตาม ผู้เล่นคนอื่นยังคงสามารถโต้ตอบกับคุณได้ตามปกติ</div> |
| <img src={useBaseUrl('/img/menu/lms-menu-cum.png')} width="128" /> | <div><strong>Force Cum</strong><br/>ปุ่มนี้จะทำให้เกิดเหตุการณ์ถึงจุดสุดยอดให้กับอวาตาร์ของคุณทันที พร้อมเล่นเสียงของเหลว เสียงร้อง และเอฟเฟกต์ภาพที่เกี่ยวข้อง หากคุณเปิดใช้งาน **Lust Feature** ค่าความเร้าจะถูกปรับให้เต็มโดยอัตโนมัติด้วย</div> |
| <img src={useBaseUrl('/img/menu/lms-menu-wet.png')} width="128" /> | <div><strong>Wet Sound</strong><br/>เมื่อเปิดใช้งานเมนูนี้ ระบบ LMS จะสลับประเภทของเสียงระหว่างมือกับรู โดยอัตโนมัติ นอกจากนี้ ระบบจะเปลี่ยนประเภทเสียงให้อัตโนมัติเมื่อมีการตรวจจับการสัมผัสกับมือหรือช่องที่ตั้งค่าไว้</div> |
| <img src={useBaseUrl('/img/menu/pcs-menu-edging.png')} width="128" /> | <div><strong>Edging (Stop Lust)</strong><br/>เมื่อเปิดใช้งานเมนูนี้ ระบบ LMS จะหยุดการเพิ่มและลดค่าความตื่นตัวชั่วคราว ไม่ว่าจะมีการโต้ตอบหรือการตรวจจับใดเกิดขึ้น ระดับความตื่นตัวจะถูกคงไว้ที่ค่าเดิม และจะไม่เปลี่ยนแปลงจนกว่าจะปิดการตั้งค่านี้</div> |
| <img src={useBaseUrl('/img/menu/pcs-menu-reset.png')} width="128" /> | <div><strong>Reset</strong><br/>ปุ่มนี้ใช้สำหรับรีเซ็ตระบบทั้งหมด รวมถึงรีเซ็ตค่าความเร้ากลับไปเป็น 0 เพื่อให้เริ่มต้นใหม่ได้หลังจากถึงจุดสุดยอด</div> |
| <img src={useBaseUrl('/img/menu/lms-menu-hand.png')} width="128" /> | <div><strong>On Hand</strong><br/>ปุ่มนี้ใช้สำหรับถอด LMS ไปไว้ที่มือของผู้ใช้ เพื่อใช้งานในโหมด Handjob</div> |
| <img src={useBaseUrl('/img/menu/lms-menu-place.png')} width="128" /> | <div><strong>Place Down</strong><br/>ปุ่มนี้ใช้สำหรับวาง LMS ไว้ภายในโลก โดยตำแหน่งที่วางจะคงที่ อย่างไรก็ตาม เพื่อเหตุผลด้านการเพิ่มประสิทธิภาพ ตำแหน่งดังกล่าวจะไม่ซิงก์กับผู้เล่นที่เข้ามาภายหลัง (Late Joiner) จึงจำเป็นต้องวางใหม่อีกครั้งหากต้องการปรับตำแหน่ง</div> |
| <img src={useBaseUrl('/img/menu/lms-menu-hide.png')} width="128" /> | <div><strong>Hide/Show</strong><br/>ปุ่มนี้ใช้สำหรับซ่อนหรือแสดงวัตถุไกด์ LMS เพื่อให้เพื่อนหรือผู้เล่นคนอื่นสามารถมองเห็นตำแหน่งที่คุณวางไว้ได้</div> |
| <img src={useBaseUrl('/img/menu/lms-menu-left.png')} width="128" /> | <div><strong>Left Hand</strong><br/>ปุ่มนี้ใช้สำหรับสลับตำแหน่ง LMS ระหว่างมือซ้ายและมือขวา ขณะใช้งานในโหมด Detach</div> |



:::tip Tip
กรณีที่ใช้อวาตาร์แบบฟูตะ (การใช้ LMS ในอวาตารหญิงที่มีอวัยวะเพศชาย) นั้นอาจทำให้ LMS ติดขัดและหยุดสร้างเสียงในที่สุด สิ่งนี้เกิดจากการที่ LMS สามารถตรวจจับ SPS Socket ของเจ้าของได้ การตั้งค่าเมนู **Self-Touch** เป็น `OFF` จะช่วยแก้ปัญหานี้
:::



