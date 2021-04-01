from PIL import Image

image1 = Image.open('与程序有关的一切/Web_project/test_website/image/family.jpg')
image1.size #(2896, 2896)
new_image1 = image1.resize((1000, 1000))

image2 = Image.open('与程序有关的一切/Web_project/test_website/image/mom_and_dad.jpg')
# print(image2.size) #(1077, 1914)
new_image2 = image2.crop((0, 200, 1077, 1914))
new_image2.resize((646, 1028)).save('mom_and_dad.png')
