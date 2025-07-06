import React, { useState } from "react";
import "../App.css";

const Blog = () => {
  const [activeFilter, setActiveFilter] = useState("all");
  const [selectedPost, setSelectedPost] = useState(null);

  const blogPosts = [
    {
      id: 1,
      title: "Building Scalable React Applications",
      excerpt:
        "Learn the best practices for creating maintainable and scalable React applications with modern architecture patterns.",
      category: "tutorial",
      readTime: "8 min read",
      date: "2024-01-15",
      image:
        "https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=500&h=300&fit=crop",
      tags: ["React", "JavaScript", "Architecture"],
      featured: true,
      content: `
        <h3>Introduction</h3>
        <p>Building scalable React applications requires careful planning and adherence to best practices. In this comprehensive guide, I'll walk you through the essential patterns and techniques I've learned from working on large-scale React projects.</p>

        <h3>Component Architecture</h3>
        <p>The foundation of any scalable React application starts with a well-thought-out component architecture. I prefer using a hierarchical structure where components are organized by feature rather than by type.</p>

        <h3>State Management</h3>
        <p>Choosing the right state management solution is crucial. For smaller applications, React's built-in useState and useContext hooks might suffice. However, for larger applications, I recommend Redux Toolkit or Zustand for their predictability and debugging capabilities.</p>

        <h3>Code Organization</h3>
        <p>Organizing your code in a logical manner is essential for maintainability. I follow the feature-based folder structure, where each feature has its own folder containing components, hooks, and utilities specific to that feature.</p>

        <h3>Performance Optimization</h3>
        <p>React applications can become slow if not optimized properly. Key techniques include memoization with React.memo, useMemo, and useCallback, lazy loading components, and implementing virtual scrolling for large lists.</p>

        <h3>Conclusion</h3>
        <p>Building scalable React applications is an iterative process that requires constant refactoring and improvement. The patterns and techniques discussed here have helped me build applications that can handle millions of users while remaining maintainable.</p>
      `,
    },
    {
      id: 2,
      title: "E-commerce Platform Case Study",
      excerpt:
        "How I built a complete e-commerce solution handling 10k+ daily users with modern web technologies.",
      category: "case-study",
      readTime: "12 min read",
      date: "2024-01-10",
      image:
        "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=500&h=300&fit=crop",
      tags: ["E-commerce", "Node.js", "MongoDB"],
      featured: true,
      content: `
        <h3>Project Overview</h3>
        <p>This case study details the development of a full-scale e-commerce platform that now serves over 10,000 daily active users. The project spanned 8 months and involved a team of 4 developers.</p>

        <h3>Technical Stack</h3>
        <p>We chose a modern tech stack consisting of React for the frontend, Node.js with Express for the backend, MongoDB for the database, and AWS for hosting and CDN services. This combination provided the scalability and performance we needed.</p>

        <h3>Key Features Implemented</h3>
        <p>The platform includes advanced features such as real-time inventory management, AI-powered product recommendations, multi-currency support, and a sophisticated admin dashboard for managing orders and analytics.</p>

        <h3>Challenges and Solutions</h3>
        <p>One of the biggest challenges was handling concurrent inventory updates. We solved this by implementing optimistic locking and a queue-based system for order processing. Payment integration was another major hurdle, which we overcame by implementing multiple payment gateways with fallback mechanisms.</p>

        <h3>Performance Metrics</h3>
        <p>The final platform achieved impressive metrics: 99.9% uptime, average page load time of 1.2 seconds, and the ability to handle 1000+ concurrent users during peak shopping periods.</p>

        <h3>Lessons Learned</h3>
        <p>This project taught me the importance of proper database indexing, the value of comprehensive testing, and the need for robust error handling in production applications. These insights have shaped my approach to all subsequent projects.</p>
      `,
    },
    {
      id: 3,
      title: "Optimizing Web Performance",
      excerpt:
        "Techniques and strategies I use to achieve 90+ Lighthouse scores and improve user experience.",
      category: "tutorial",
      readTime: "6 min read",
      date: "2024-01-05",
      image:
        "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=500&h=300&fit=crop",
      tags: ["Performance", "Optimization", "Web Vitals"],
      featured: false,
      content: `
        <h3>The Importance of Web Performance</h3>
        <p>Web performance directly impacts user experience, conversion rates, and SEO rankings. A slow website can cost you users and revenue, making performance optimization a critical skill for any web developer.</p>

        <h3>Core Web Vitals</h3>
        <p>Google's Core Web Vitals focus on three key metrics: Largest Contentful Paint (LCP), First Input Delay (FID), and Cumulative Layout Shift (CLS). Understanding and optimizing these metrics is essential for good performance scores.</p>

        <h3>Image Optimization</h3>
        <p>Images often represent the largest portion of a webpage's payload. I use modern formats like WebP and AVIF, implement lazy loading, and serve responsive images to significantly reduce load times.</p>

        <h3>Code Splitting and Lazy Loading</h3>
        <p>Breaking your application into smaller chunks and loading them on demand can dramatically improve initial load times. React's dynamic imports and Suspense make this easier than ever.</p>

        <h3>Caching Strategies</h3>
        <p>Implementing effective caching at multiple levels - browser cache, CDN, and service workers - can provide instant loading for returning users and reduce server load.</p>

        <h3>Monitoring and Measurement</h3>
        <p>Regular performance monitoring using tools like Lighthouse, WebPageTest, and Real User Monitoring (RUM) helps identify performance regressions before they impact users.</p>
      `,
    },
    {
      id: 4,
      title: "AI-Powered Dashboard Project",
      excerpt:
        "A deep dive into building an intelligent analytics dashboard with real-time data visualization.",
      category: "case-study",
      readTime: "15 min read",
      date: "2023-12-28",
      image:
        "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=500&h=300&fit=crop",
      tags: ["AI", "Dashboard", "Data Visualization"],
      featured: true,
      content: `
        <h3>Project Background</h3>
        <p>This project involved creating an AI-powered analytics dashboard for a fintech company. The goal was to provide real-time insights and predictive analytics to help business users make data-driven decisions.</p>

        <h3>AI Integration</h3>
        <p>We integrated several AI capabilities including anomaly detection, trend prediction, and automated insights generation. The system uses machine learning models to identify unusual patterns in financial data and alert users to potential issues.</p>

        <h3>Real-time Data Processing</h3>
        <p>The dashboard processes millions of data points in real-time using Apache Kafka for data streaming and Redis for caching. This architecture ensures that users always see the most up-to-date information.</p>

        <h3>Visualization Challenges</h3>
        <p>Creating meaningful visualizations for complex financial data required extensive user research and iterative design. We used D3.js for custom charts and implemented interactive features that allow users to drill down into specific data segments.</p>

        <h3>Security and Compliance</h3>
        <p>Working with financial data meant implementing robust security measures including end-to-end encryption, role-based access control, and comprehensive audit logging to meet regulatory requirements.</p>

        <h3>Impact and Results</h3>
        <p>The dashboard reduced the time needed for financial analysis by 70% and helped identify potential fraud cases 3x faster than the previous manual process. User adoption exceeded expectations with 95% of target users actively using the platform within the first month.</p>
      `,
    },
    {
      id: 5,
      title: "Modern CSS Techniques",
      excerpt:
        "Exploring advanced CSS features like Grid, Flexbox, and CSS Custom Properties for modern web design.",
      category: "tutorial",
      readTime: "7 min read",
      date: "2023-12-20",
      image:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=500&h=300&fit=crop",
      tags: ["CSS", "Design", "Frontend"],
      featured: false,
      content: `
        <h3>CSS Grid: The Game Changer</h3>
        <p>CSS Grid has revolutionized how we approach layout design. Unlike Flexbox, which is one-dimensional, Grid allows for complex two-dimensional layouts with explicit control over both rows and columns.</p>

        <h3>Flexbox for Component Layout</h3>
        <p>While Grid excels at page layout, Flexbox is perfect for component-level alignment and distribution. I use Flexbox for navigation bars, card layouts, and centering content.</p>

        <h3>CSS Custom Properties (Variables)</h3>
        <p>CSS custom properties enable dynamic theming and reduce code duplication. I use them extensively for creating design systems that can be easily maintained and updated across large applications.</p>

        <h3>Container Queries</h3>
        <p>Container queries are a recent addition that allows components to respond to their container's size rather than the viewport. This enables truly modular, reusable components that adapt to any context.</p>

        <h3>Modern Selectors and Pseudo-classes</h3>
        <p>CSS has gained powerful new selectors like :has(), :is(), and :where() that make complex styling scenarios much simpler and more readable.</p>

        <h3>CSS Architecture</h3>
        <p>Organizing CSS for maintainability is crucial in large projects. I follow a methodology that combines BEM naming conventions with component-scoped styles to create scalable CSS architectures.</p>
      `,
    },
    {
      id: 6,
      title: "Mobile App Development Journey",
      excerpt:
        "My experience building cross-platform mobile applications using React Native and modern tools.",
      category: "case-study",
      readTime: "10 min read",
      date: "2023-12-15",
      image:
        "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=500&h=300&fit=crop",
      tags: ["Mobile", "React Native", "Cross-platform"],
      featured: false,
      content: `
        <h3>Why React Native?</h3>
        <p>Choosing React Native for cross-platform mobile development allowed our team to leverage existing React skills while delivering native performance on both iOS and Android platforms.</p>

        <h3>Development Setup</h3>
        <p>Setting up a robust development environment was crucial. We used Expo for rapid prototyping and Metro bundler for production builds, along with TypeScript for type safety and better developer experience.</p>

        <h3>Navigation and State Management</h3>
        <p>React Navigation proved to be the ideal solution for handling complex navigation patterns. For state management, we used Redux Toolkit with RTK Query for efficient data fetching and caching.</p>

        <h3>Platform-Specific Considerations</h3>
        <p>While React Native enables code sharing, certain features required platform-specific implementations. We created platform-specific components for features like camera access and push notifications.</p>

        <h3>Performance Optimization</h3>
        <p>Mobile performance optimization required different strategies than web development. We focused on reducing bundle size, optimizing images for mobile devices, and implementing efficient list rendering for large datasets.</p>

        <h3>Testing and Deployment</h3>
        <p>We implemented comprehensive testing using Jest and Detox for end-to-end testing. The deployment process used CI/CD pipelines to automatically build and deploy to both app stores, significantly reducing release time.</p>
      `,
    },
  ];

  const categories = [
    { id: "all", label: "All Posts", icon: "📚" },
    { id: "tutorial", label: "Tutorials", icon: "🎓" },
    { id: "case-study", label: "Case Studies", icon: "🔍" },
  ];

  const filteredPosts =
    activeFilter === "all"
      ? blogPosts
      : blogPosts.filter((post) => post.category === activeFilter);

  const featuredPosts = blogPosts.filter((post) => post.featured);

  return (
    <div id="blog">
      <div className="container">
        <div className="blog-header">
          <span className="blog-subtitle">Knowledge Sharing</span>
          <h1 className="blog-title">
            Blog & <span className="highlight">Case Studies</span>
          </h1>
          <p className="blog-description">
            Insights, tutorials, and detailed case studies from my development
            journey
          </p>
        </div>

        {/* Featured Posts Section */}
        <div className="featured-section">
          <h2 className="section-title">
            <span className="title-icon">⭐</span>
            Featured Articles
          </h2>
          <div className="featured-grid">
            {featuredPosts.slice(0, 2).map((post) => (
              <article key={post.id} className="featured-card">
                <div className="featured-image">
                  <img src={post.image} alt={post.title} />
                  <div className="featured-overlay">
                    <span className="featured-category">{post.category}</span>
                  </div>
                </div>
                <div className="featured-content">
                  <div className="featured-meta">
                    <span className="featured-date">{post.date}</span>
                    <span className="featured-read-time">{post.readTime}</span>
                  </div>
                  <h3 className="featured-title">{post.title}</h3>
                  <p className="featured-excerpt">{post.excerpt}</p>
                  <div className="featured-tags">
                    {post.tags.map((tag) => (
                      <span key={tag} className="featured-tag">
                        {tag}
                      </span>
                    ))}
                  </div>
                  <button
                    className="featured-read-more"
                    onClick={() => setSelectedPost(post)}
                  >
                    Read More →
                  </button>
                </div>
              </article>
            ))}
          </div>
        </div>

        {/* Filter Navigation */}
        <div className="blog-filters">
          {categories.map((category) => (
            <button
              key={category.id}
              className={`filter-btn ${activeFilter === category.id ? "active" : ""}`}
              onClick={() => setActiveFilter(category.id)}
            >
              <span className="filter-icon">{category.icon}</span>
              {category.label}
            </button>
          ))}
        </div>

        {/* Blog Grid */}
        <div className="blog-grid">
          {filteredPosts.map((post) => (
            <article key={post.id} className="blog-card">
              <div className="blog-image">
                <img src={post.image} alt={post.title} />
                <div className="blog-overlay">
                  <div className="blog-category">{post.category}</div>
                </div>
              </div>

              <div className="blog-content">
                <div className="blog-meta">
                  <span className="blog-date">{post.date}</span>
                  <span className="blog-read-time">{post.readTime}</span>
                </div>

                <h3 className="blog-title-card">{post.title}</h3>
                <p className="blog-excerpt">{post.excerpt}</p>

                <div className="blog-tags">
                  {post.tags.map((tag) => (
                    <span key={tag} className="blog-tag">
                      {tag}
                    </span>
                  ))}
                </div>

                <button
                  className="blog-read-more"
                  onClick={() => setSelectedPost(post)}
                >
                  Read Article
                  <span className="read-more-arrow">→</span>
                </button>
              </div>
            </article>
          ))}
        </div>

        {/* Newsletter Signup */}
        <div className="newsletter-section">
          <div className="newsletter-content">
            <div className="newsletter-icon">📧</div>
            <h3 className="newsletter-title">Stay Updated</h3>
            <p className="newsletter-description">
              Get the latest articles and insights delivered directly to your
              inbox
            </p>
            <form className="newsletter-form">
              <input
                type="email"
                placeholder="Enter your email address"
                className="newsletter-input"
              />
              <button type="submit" className="newsletter-btn">
                Subscribe
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* Modal for post details */}
      {selectedPost && (
        <div
          className="blog-modal-overlay"
          onClick={() => setSelectedPost(null)}
        >
          <div className="blog-modal" onClick={(e) => e.stopPropagation()}>
            <button
              className="modal-close"
              onClick={() => setSelectedPost(null)}
            >
              ×
            </button>
            <div className="modal-content">
              <img
                src={selectedPost.image}
                alt={selectedPost.title}
                className="modal-image"
              />
              <div className="modal-header">
                <div className="modal-meta">
                  <span className="modal-category">
                    {selectedPost.category}
                  </span>
                  <span className="modal-date">{selectedPost.date}</span>
                  <span className="modal-read-time">
                    {selectedPost.readTime}
                  </span>
                </div>
                <h2 className="modal-title">{selectedPost.title}</h2>
                <div className="modal-tags">
                  {selectedPost.tags.map((tag) => (
                    <span key={tag} className="modal-tag">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
              <div className="modal-body">
                <div
                  className="article-content"
                  dangerouslySetInnerHTML={{ __html: selectedPost.content }}
                />
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Blog;
