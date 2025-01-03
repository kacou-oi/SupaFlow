-- Insert sample data into the users table
INSERT INTO users (email, password) VALUES
('sample.user1@example.com', 'password123'),
('sample.user2@example.com', 'password456');

-- Insert sample data into the categories table
INSERT INTO categories (name) VALUES
('Technology'),
('Travel'),
('Food');

-- Insert sample data into the posts table
INSERT INTO posts (title, content, user_id, category_id) VALUES
('First Sample Post', 'This is the content of the first sample post.', 1, 1),
('Second Sample Post', 'This is the content of the second sample post.', 2, 3),
('A Trip to Remember', 'Just got back from an amazing trip!', 1, 2);
