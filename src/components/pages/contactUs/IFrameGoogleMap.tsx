interface IframeGoogleMapProps {
  latitude?: number;
  longitude?: number;
  zoom?: number;
  width?: string;
  height?: string;
}

const IframeGoogleMap = ({
  latitude,
  longitude,
  zoom = 15,
  width = "100%",
  height = "400px",
}: IframeGoogleMapProps) => {
  // const src = `https://maps.google.com/maps?q=${latitude},${longitude}&z=${zoom}&output=embed`;

  return (
    <div className="overflow-hidden">
      <div dangerouslySetInnerHTML={{ __html: ` <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3650.7693049187556!2d90.40498699999999!3d23.791228!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755c74f328ecfb3%3A0x8f91660e743746f3!2sSoftwind%20Tech%20Limited!5e0!3m2!1sen!2sbd!4v1750066165755!5m2!1sen!2sbd" width="100%" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>` }} />
    </div>
  );
};

export default IframeGoogleMap;