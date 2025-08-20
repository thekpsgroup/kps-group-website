import { NextRequest, NextResponse } from 'next/server';
import { submitLead } from '../../actions/submit-lead';

export async function POST(request: NextRequest) {
  try {
    const formData = await request.formData();
    const result = await submitLead(formData);
    
    return NextResponse.json(result);
  } catch (error) {
    console.error('API route error:', error);
    return NextResponse.json(
      { 
        success: false, 
        message: 'Internal server error. Please try again.' 
      },
      { status: 500 }
    );
  }
}
