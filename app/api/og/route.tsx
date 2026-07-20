import { ImageResponse } from 'next/og';

export const runtime = 'edge';

export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url);

    // Dynamic params
    const hasTitle = searchParams.has('title');
    const title = hasTitle
      ? searchParams.get('title')?.slice(0, 100)
      : 'Kumar Magnacity | Sovereign Living';

    const hasSubtitle = searchParams.has('subtitle');
    const subtitle = hasSubtitle 
      ? searchParams.get('subtitle')?.slice(0, 100) 
      : 'Manjari, Pune East • 150 Acre Township';

    return new ImageResponse(
      (
        <div
          style={{
            height: '100%',
            width: '100%',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: '#0a0a0a',
            backgroundImage: 'radial-gradient(circle at 50% -20%, #2a2a2a 0%, #0a0a0a 100%)',
            border: '24px solid #111',
          }}
        >
          {/* Accent Glow */}
          <div
            style={{
              position: 'absolute',
              top: '50%',
              left: '50%',
              width: '800px',
              height: '800px',
              transform: 'translate(-50%, -50%)',
              background: 'radial-gradient(circle, rgba(201, 162, 39, 0.1) 0%, rgba(0,0,0,0) 70%)',
              borderRadius: '50%',
            }}
          />
          
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              padding: '40px',
              textAlign: 'center',
            }}
          >
            <h1
              style={{
                fontSize: 64,
                fontFamily: 'sans-serif',
                fontWeight: 'bold',
                color: '#ffffff',
                letterSpacing: '-0.02em',
                lineHeight: 1.1,
                marginBottom: 24,
                maxWidth: 1000,
                padding: '0 40px',
              }}
            >
              {title}
            </h1>
            <p
              style={{
                fontSize: 32,
                fontFamily: 'sans-serif',
                fontWeight: 'normal',
                color: '#c9a227',
                letterSpacing: '0.1em',
                textTransform: 'uppercase',
                margin: 0,
              }}
            >
              {subtitle}
            </p>
          </div>
          
          <div
            style={{
              position: 'absolute',
              bottom: 60,
              display: 'flex',
              alignItems: 'center',
              gap: 16,
            }}
          >
            <div style={{ color: '#ffffff', fontSize: 24, fontWeight: 'bold', letterSpacing: '0.2em' }}>
              KUMAR MAGNACITY
            </div>
          </div>
        </div>
      ),
      {
        width: 1200,
        height: 630,
      }
    );
  } catch (e: any) {
    console.error(e);
    return new Response('Failed to generate image', { status: 500 });
  }
}
