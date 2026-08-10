import { NextRequest, NextResponse } from 'next/server';
import { Client } from '@notionhq/client';

const notion = new Client({
  auth: process.env.NOTION_API_TOKEN,
});

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    
    // Sync blog posts from Notion
    const blogPosts = await notion.databases.query({
      database_id: process.env.NOTION_BLOG_DATABASE_ID!,
    });
    
    // Sync projects from Notion
    const projects = await notion.databases.query({
      database_id: process.env.NOTION_PROJECTS_DATABASE_ID!,
    });
    
    return NextResponse.json({
      success: true,
      blogPosts: blogPosts.results.length,
      projects: projects.results.length,
    });
  } catch (error) {
    console.error('Notion sync error:', error);
    return NextResponse.json(
      { success: false, error: 'Failed to sync with Notion' },
      { status: 500 }
    );
  }
}
