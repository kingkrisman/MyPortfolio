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
                <p>{selectedPost.excerpt}</p>
                <p>
                  This is a preview of the full article. In a real
                  implementation, this would contain the complete article
                  content with proper formatting, code examples, and detailed
                  explanations.
                </p>
                <p>
                  The article would continue with in-depth technical details,
                  step-by-step guides, and practical examples that readers can
                  follow along with.
                </p>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Blog;
