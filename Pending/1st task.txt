In the vast landscape of the internet, communication protocols serve as the backbone of data exchange between clients and servers.
Among these protocols, HTTP (Hypertext Transfer Protocol) stands as a cornerstone, facilitating the transfer of web content across the World Wide Web.


HTTP/1.1: The Foundation:
Introduced in 1997, HTTP/1.1 revolutionized the way web servers and clients communicated. However, as the digital landscape evolved, 
the limitations of HTTP/1.1 became increasingly apparent. One of the most notable drawbacks was its inability to efficiently handle multiple concurrent requests. 
Each HTTP/1.1 request required its dedicated connection, leading to a phenomenon known as "head-of-line blocking,
" where the transmission of a single large file could delay the delivery of smaller resources.

Enter HTTP/2: The Next Generation
Recognizing the need for a more efficient protocol to cater to the evolving demands of the web, the Internet Engineering Task Force (IETF) introduced HTTP/2 in 2015. 
Built upon the foundation of its predecessor, HTTP/2 aimed to address the shortcomings of HTTP/1.1 while introducing a slew of new features to enhance performance, 
security, and reliability.


Key Differences Summarized

1.Multiplexing: HTTP/1.1 relies on multiple connections for parallelism, whereas HTTP/2 enables multiplexing over a single connection, enhancing efficiency and reducing latency.
2.Header Compression: HTTP/2 compresses headers, minimizing overhead and improving bandwidth utilization compared to HTTP/1.1.
3.Server Push: HTTP/2 introduces server push, allowing servers to proactively send resources to clients, thereby optimizing page load times.
4.Binary Protocol: HTTP/2 adopts a binary framing layer, enhancing parsing efficiency and reducing complexity compared to the text-based format of HTTP/1.1.

Object Representation

const blog = {
  title: "My Awesome Blog",
  author: "John Doe",
  content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed et commodo ipsum. Vivamus euismod risus a odio gravida, sit amet fermentum tortor maximus. In feugiat rutrum nisi. Integer dapibus vel mauris eget tristique.",
  publishDate: "2024-04-14",
  tags: ["JavaScript", "Web Development", "Programming"],
  comments: [
    {
      author: "Jane Smith",
      comment: "Great post! Really enjoyed reading it.",
      date: "2024-04-15"
    },
    {
      author: "Alex Johnson",
      comment: "I found this very helpful. Thanks for sharing!",
      date: "2024-04-16"
    }
  ],
  likes: 25,
  share: 10,
  views: 100
};

console.log(blog.title);
console.log(blog.author);
console.log(blog.content);
console.log(blog.publishDate);
console.log(blog.tags);
console.log(blog.comments);
console.log(blog.likes);
console.log(blog.share);
console.log(blog.views);

In this example, the blog object represents a blog post. It contains properties such as title, author, content, publishDate, tags, comments, likes, share, and views. 
Each property holds relevant information about the blog post. Additionally, the comments property is an array of objects, where each object represents a comment with properties 
such as author, comment, and date. This structure allows for easy access to different aspects of the blog post, such as its content, comments, and metadata.



INTRODUCTION TO WEB (WWW - WORLD WIDE WEB):
Digital medium which anyone in this world can use.

Uses:

Googling out some information ( Searching ),
Entertainment purpose,
Email, Gmail, Yahoo mail, SMS, Notifications, Whatsapp etc Communications.
Learning Skills
Net Banking
Business purposes,
Gaming
Tickets buying and review
 Online shopping

BROWSERS:
What is a browser?
A platform to access data.

Types of browsers:

Chrome,
Safari,
Moz Firefox,
Internet explorer,
Bing
Edge
Opera
UC
Samsung -
Netscape
Brave

Why Every company have their own browsers?

To collect the data of their customers.



